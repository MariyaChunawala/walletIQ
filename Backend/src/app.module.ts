import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { DashboardModule } from './Dashboard/dashboard.module';
import { IncomeModule } from './Income/income.module';
import { ExpensesModule } from './Expenses/expenses.module';
import { UserModule } from './User/user.module';

@Module({
  imports: [AuthModule, DashboardModule, IncomeModule, ExpensesModule, UserModule],
})
export class AppModule {}
