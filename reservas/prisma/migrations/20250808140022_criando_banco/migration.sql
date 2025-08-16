-- CreateEnum
CREATE TYPE "public"."EnumRole" AS ENUM ('admin', 'gerente', 'comum');

-- CreateEnum
CREATE TYPE "public"."EnumStatus" AS ENUM ('ativo', 'nao_ativo');

-- CreateEnum
CREATE TYPE "public"."ReservaStatus" AS ENUM ('reservado', 'nao_reservado');

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "role" "public"."EnumRole" NOT NULL,
    "status" "public"."EnumStatus" NOT NULL,
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_cadastrou" INTEGER,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Local" (
    "id" SERIAL NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "statusReserva" "public"."ReservaStatus" NOT NULL,
    "status" "public"."EnumStatus" NOT NULL,
    "local" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataEventoInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataEventoFinal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usernameReserva" TEXT NOT NULL,

    CONSTRAINT "Local_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "public"."Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "public"."Usuario"("cpf");

-- AddForeignKey
ALTER TABLE "public"."Local" ADD CONSTRAINT "Local_usernameReserva_fkey" FOREIGN KEY ("usernameReserva") REFERENCES "public"."Usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
