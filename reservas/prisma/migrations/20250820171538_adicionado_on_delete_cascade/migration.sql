-- DropForeignKey
ALTER TABLE "public"."reserva" DROP CONSTRAINT "reserva_id_local_fkey";

-- DropForeignKey
ALTER TABLE "public"."reserva" DROP CONSTRAINT "reserva_username_usuario_fkey";

-- AddForeignKey
ALTER TABLE "public"."reserva" ADD CONSTRAINT "reserva_id_local_fkey" FOREIGN KEY ("id_local") REFERENCES "public"."local"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reserva" ADD CONSTRAINT "reserva_username_usuario_fkey" FOREIGN KEY ("username_usuario") REFERENCES "public"."usuario"("username") ON DELETE CASCADE ON UPDATE CASCADE;
