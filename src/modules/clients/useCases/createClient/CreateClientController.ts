import { Request, Response } from "express";
import { CreateClientUseCases } from "./CreateClientUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createClientUseCase = new CreateClientUseCases();
    const result = await createClientUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}