import { PROTECTED_ROUTES, PUBLIC_ROUTES } from "./routePaths";
import EventType from "@/pages/event_type";
import Meetings from "@/pages/meeting";
import Availability from "@/pages/availability";
import Integrations from "@/pages/integrations";
import UserEventsPage from "@/pages/external_page/user-events";
import UserSingleEventPage from "@/pages/external_page/user-single-event";

export const protectedRoutePaths = [
  { path: PROTECTED_ROUTES.EVENT_TYPES, element: <EventType /> },
  { path: PROTECTED_ROUTES.MEETINGS, element: <Meetings /> },
  { path: PROTECTED_ROUTES.AVAILBILITIY, element: <Availability /> },
  { path: PROTECTED_ROUTES.INTEGRATIONS, element: <Integrations /> },
];

export const publicRoutePaths = [
  { path: PUBLIC_ROUTES.USER_EVENTS, element: <UserEventsPage /> },
  { path: PUBLIC_ROUTES.USER_SINGLE_EVENT, element: <UserSingleEventPage /> },
];
