/*
  Warnings:

  - You are about to drop the column `dataEventoFinal` on the `local` table. All the data in the column will be lost.
  - You are about to drop the column `dataEventoInicio` on the `local` table. All the data in the column will be lost.
  - You are about to drop the column `statusReserva` on the `local` table. All the data in the column will be lost.
  - You are about to drop the column `usernameReserva` on the `local` table. All the data in the column will be lost.
  - Changed the type of `status` on the `local` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `usuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."local" DROP CONSTRAINT "local_usernameReserva_fkey";

-- AlterTable
ALTER TABLE "public"."local" DROP COLUMN "dataEventoFinal",
DROP COLUMN "dataEventoInicio",
DROP COLUMN "statusReserva",
DROP COLUMN "usernameReserva",
DROP COLUMN "status",
ADD COLUMN     "status" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "public"."usuario" DROP COLUMN "status",
ADD COLUMN     "status" BOOLEAN NOT NULL;

-- DropEnum
DROP TYPE "public"."enumStatus";

-- DropEnum
DROP TYPE "public"."reservaStatus";

-- CreateTable
CREATE TABLE "public"."reserva" (
    "id" SERIAL NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataEventoFinal" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "id_local" INTEGER NOT NULL,
    "username_usuario" TEXT NOT NULL,

    CONSTRAINT "reserva_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."reserva" ADD CONSTRAINT "reserva_id_local_fkey" FOREIGN KEY ("id_local") REFERENCES "public"."local"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reserva" ADD CONSTRAINT "reserva_username_usuario_fkey" FOREIGN KEY ("username_usuario") REFERENCES "public"."usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
