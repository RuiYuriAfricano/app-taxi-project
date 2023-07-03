import { Injectable } from '@nestjs/common';
import { AddActorDto } from './dto/addActorDto';
import { UpdateActorDto } from './dto/updateActorDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActorService {
  constructor(private prisma: PrismaService) {}

  async add(data: AddActorDto) {
    const newActor = await this.prisma.actor.create({
      data,
    });
    return newActor;
  }

  async update(data: UpdateActorDto) {
    const actorR = await this.prisma.actor.update({
      where: {
        email: data.email,
      },
      data,
    });

    return actorR;
  }

  async remove(email: string) {
    const response = await this.prisma.actor.delete({
      where: { email },
    });

    return response;
  }

  async getOne(email: string) {
    const actorR = await this.prisma.actor.findUnique({
      where: {
        email,
      },
    });

    return actorR;
  }

  async login(email: string, password: string) {
    const actorR = await this.prisma.actor.findFirst({
      where: {
        email: email,
        password: password,
      },
      include: {
        cliente: true,
        motorista: true,
      },
    });

    return actorR;
  }

  async getAll() {
    const actoresR = await this.prisma.actor.findMany();

    return actoresR;
  }
}
