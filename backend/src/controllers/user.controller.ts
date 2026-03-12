import { Request, Response } from "express";
import { HTTPSTATUS } from "../config/http.config";
import { asyncHandler } from "../middlewares/asyncHandler.middeware";

export const getMeController = asyncHandler(
  async (req: Request, res: Response) => {
    return res.status(HTTPSTATUS.OK).json({
      message: "User fetched successfully",
      user: req.user,
    });
  }
);

