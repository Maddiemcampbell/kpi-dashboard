import mongoose from "mongoose";
import {loadType} from "mongoose-currency"

const Schema = mongoose.Schema;

const KPISchema = new Schema({
    totalProfit: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
      totalRevenue: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
      totalExpenses: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
      expensesByCategory: {
        type: Map,
        of: {
          type: mongoose.Types.Currency,
          currency: "USD",
          get: (v) => v / 100,
        },
      },
      monthlyData: [monthSchema],
      dailyData: [daySchema],
    },
    { timestamps: true, toJSON: { getters: true }
});

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;