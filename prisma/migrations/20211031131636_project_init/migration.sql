-- CreateTable
CREATE TABLE "HealthData" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "height" DECIMAL(65,30) NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,
    "bodyFat" INTEGER NOT NULL,
    "weighIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HealthData_pkey" PRIMARY KEY ("id")
);
