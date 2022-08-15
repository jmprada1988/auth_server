-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "fisrt_name" TEXT NOT NULL,
    "middle_namne" TEXT NOT NULL,
    "last_names" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
