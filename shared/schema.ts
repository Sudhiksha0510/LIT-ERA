import {
  sqliteTable,
  text,
  integer,
  index,
} from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { sql } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: text("id").primaryKey().default(sql`(lower(hex(randomblob(16))))`),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  club: text("club").default("LIT'ERA"),
  isAdmin: integer("is_admin", { mode: 'boolean' }).default(false),
  joinDate: integer("join_date", { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export const contactSubmissions = sqliteTable("contact_submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  country: text("country"),
  reason: text("reason"),
  message: text("message").notNull(),
  submissionDate: integer("submission_date", { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export const events = sqliteTable("events", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description"),
  eventDate: text("event_date"), // SQLite uses text for dates
  isActive: integer("is_active", { mode: 'boolean' }).default(true),
});

export const gameScores = sqliteTable("game_scores", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").references(() => users.id),
  gameType: text("game_type").notNull(), // 'strands' or 'spellbee'
  score: integer("score"),
  completionTime: integer("completion_time"),
  completedDate: integer("completed_date", { mode: 'timestamp' }).default(sql`(unixepoch())`),
}, (table) => ({
  gameTypeIdx: index("game_scores_game_type_idx").on(table.gameType),
  userIdIdx: index("game_scores_user_id_idx").on(table.userId),
}));

export const puzzles = sqliteTable("puzzles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  type: text("type").notNull(), // 'strands' or 'spellbee'
  data: text("data").notNull(), // JSON stringified puzzle data
  publishDate: text("publish_date").notNull(),
  createdAt: integer("created_at", { mode: 'timestamp' }).default(sql`(unixepoch())`),
}, (table) => ({
  typeDateIdx: index("puzzles_type_date_idx").on(table.type, table.publishDate),
  publishDateIdx: index("puzzles_publish_date_idx").on(table.publishDate),
}));

export const content = sqliteTable("content", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  type: text("type").notNull(), // 'thought', 'riddle', 'quote', 'fact', 'poem'
  title: text("title").notNull(),
  content: text("content").notNull(),
  answer: text("answer"), // for riddles
  author: text("author").notNull(),
  date: text("date").notNull(),
  isActive: integer("is_active", { mode: 'boolean' }).default(true),
  createdAt: integer("created_at", { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export const submissions = sqliteTable("submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  fileName: text("file_name"),
  fileSize: integer("file_size"),
  originalFileName: text("original_file_name"),
  filePath: text("file_path"),
  status: text("status").default("pending"), // 'pending', 'approved', 'rejected'
  submittedAt: integer("submitted_at", { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export const publications = sqliteTable("publications", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  category: text("category").notNull(), // 'newspaper', 'magazine', 'journal', 'anthology'
  author: text("author").notNull(),
  description: text("description").notNull(),
  coverImage: text("cover_image"), // path to cover image
  pdfFile: text("pdf_file"), // path to PDF file
  pdfFileName: text("pdf_file_name"),
  pages: integer("pages"),
  publishDate: text("publish_date").notNull(),
  featured: integer("featured", { mode: 'boolean' }).default(false),
  views: integer("views").default(0),
  downloads: integer("downloads").default(0),
  likes: integer("likes").default(0),
  isActive: integer("is_active", { mode: 'boolean' }).default(true),
  createdAt: integer("created_at", { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export const eventRegistrations = sqliteTable("event_registrations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").references(() => users.id),
  eventId: integer("event_id").notNull(),
  eventTitle: text("event_title").notNull(),
  registeredAt: integer("registered_at", { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export const munRegistrations = sqliteTable("mun_registrations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").references(() => users.id),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  committee: text("committee").notNull(),
  experience: text("experience"),
  registeredAt: integer("registered_at", { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

// Zod Schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  joinDate: true,
});
export const insertContactSchema = createInsertSchema(contactSubmissions).omit({ id: true, submissionDate: true });
export const insertEventSchema = createInsertSchema(events).omit({ id: true });
export const insertGameScoreSchema = createInsertSchema(gameScores).omit({ id: true, completedDate: true });
export const insertPuzzleSchema = createInsertSchema(puzzles).omit({ id: true, createdAt: true });
export const insertContentSchema = createInsertSchema(content).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  isActive: z.boolean().optional().default(true),
  answer: z.string().nullable().optional(),
});
export const insertSubmissionSchema = createInsertSchema(submissions).omit({ id: true, submittedAt: true });
export const insertEventRegistrationSchema = createInsertSchema(eventRegistrations).omit({ id: true, registeredAt: true });
export const insertMunRegistrationSchema = createInsertSchema(munRegistrations).omit({ id: true, registeredAt: true });
export const insertPublicationSchema = createInsertSchema(publications).omit({ id: true, createdAt: true, views: true, downloads: true, likes: true });

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type GameScore = typeof gameScores.$inferSelect;
export type InsertGameScore = z.infer<typeof insertGameScoreSchema>;
export type Puzzle = typeof puzzles.$inferSelect;
export type InsertPuzzle = z.infer<typeof insertPuzzleSchema>;
export type Content = typeof content.$inferSelect;
export type InsertContent = z.infer<typeof insertContentSchema>;
export type Submission = typeof submissions.$inferSelect;
export type InsertSubmission = z.infer<typeof insertSubmissionSchema>;
export type EventRegistration = typeof eventRegistrations.$inferSelect;
export type InsertEventRegistration = z.infer<typeof insertEventRegistrationSchema>;
export type MunRegistration = typeof munRegistrations.$inferSelect;
export type InsertMunRegistration = z.infer<typeof insertMunRegistrationSchema>;
export type Publication = typeof publications.$inferSelect;
export type InsertPublication = z.infer<typeof insertPublicationSchema>;
