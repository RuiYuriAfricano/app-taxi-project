import { Injectable } from '@nestjs/common';
import { AddTaxiDto } from './dto/addTaxiDto';
import { UpdateTaxiDto } from './dto/updateTaxiDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaxiService {
  constructor(private prisma: PrismaService) { }

  async add(data: AddTaxiDto) {
    const newTaxi = await this.prisma.taxi.create(
      {
        data,
      }
    )
    return newTaxi;
  }

  async update(data: UpdateTaxiDto) {
    data.codTaxi = Number(data?.codTaxi);
    const taxiR = await this.prisma.taxi.update({
      where: {
        codTaxi: data.codTaxi,
      },
      data,
    });

    return taxiR;
  }

  async remove(codTaxi: number) {
    const response = await this.prisma.taxi.delete({
      where: { codTaxi },
    });

    return response;
  }

  async getOne(codTaxi: number) {
    const taxiR = await this.prisma.taxi.findUnique({
      where: {
        codTaxi,
      },
    });

    return taxiR;
  }

  async getAll() {
    const taxisR = await this.prisma.taxi.findMany();

    return taxisR;
  }

}
