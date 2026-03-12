import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../config/database.config";
import { User } from "../database/entities/user.entity";
import { DayOfWeekEnum } from "../database/entities/day-availability";
import { Availability } from "../database/entities/availability.entity";

export const passportAuthenticateJwt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    
    // Check if the default user exists
    let user = await userRepository.findOne({ 
      where: { email: "admin@example.com" },
      relations: ["availability"]
    });
    
    // If not, create one with default availability
    if (!user) {
      user = userRepository.create({
        name: "Admin User",
        username: "admin",
        email: "admin@example.com",
        password: "password123", // Will be hashed via @BeforeInsert
      });
      await userRepository.save(user);

      // Create default availability
      const availabilityRepository = AppDataSource.getRepository(Availability);
      const days = [
        DayOfWeekEnum.MONDAY,
        DayOfWeekEnum.TUESDAY,
        DayOfWeekEnum.WEDNESDAY,
        DayOfWeekEnum.THURSDAY,
        DayOfWeekEnum.FRIDAY,
      ].map((day) => {
        const baseDate = new Date().toISOString().split("T")[0];
        return {
          day,
          startTime: new Date(`${baseDate}T09:00:00Z`),
          endTime: new Date(`${baseDate}T17:00:00Z`),
          isAvailable: true,
        };
      });

      await availabilityRepository.save({
        user,
        timeGap: 30,
        days,
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error authenticating default user:", error);
    res.status(500).json({ message: "Internal server error during authentication" });
  }
};
