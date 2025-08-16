/*
  Warnings:

  - You are about to drop the `Local` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."enumRole" AS ENUM ('admin', 'gerente', 'comum');

-- CreateEnum
CREATE TYPE "public"."enumStatus" AS ENUM ('ativo', 'nao_ativo');

-- CreateEnum
CREATE TYPE "public"."reservaStatus" AS ENUM ('reservado', 'nao_reservado');

-- DropForeignKey
ALTER TABLE "public"."Local" DROP CONSTRAINT "Local_usernameReserva_fkey";

-- DropTable
DROP TABLE "public"."Local";

-- DropTable
DROP TABLE "public"."Usuario";

-- DropEnum
DROP TYPE "public"."EnumRole";

-- DropEnum
DROP TYPE "public"."EnumStatus";

-- DropEnum
DROP TYPE "public"."ReservaStatus";

-- CreateTable
CREATE TABLE "public"."usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "role" "public"."enumRole" NOT NULL,
    "status" "public"."enumStatus" NOT NULL,
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_cadastrou" INTEGER,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."local" (
    "id" SERIAL NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "statusReserva" "public"."reservaStatus" NOT NULL,
    "status" "public"."enumStatus" NOT NULL,
    "local" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataEventoInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataEventoFinal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usernameReserva" TEXT NOT NULL,

    CONSTRAINT "local_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_username_key" ON "public"."usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_cpf_key" ON "public"."usuario"("cpf");

-- AddForeignKey
ALTER TABLE "public"."local" ADD CONSTRAINT "local_usernameReserva_fkey" FOREIGN KEY ("usernameReserva") REFERENCES "public"."usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
