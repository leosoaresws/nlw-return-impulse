import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository, } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {

  /**
   * It creates a new feedback record in the database
   * @param {FeedbackCreateData} object - FeedbackCreateData
   */
  async create({type, comment, screenshot,}: FeedbackCreateData): Promise<void> {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
