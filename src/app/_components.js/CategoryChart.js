"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#60a5fa", "#f87171", "#4ade80", "#facc15", "#c084fc"];

export default function CategoryChart({ data }) {
    return (
        <div className="bg-blue-100 rounded-xl p-4 shadow-sm border border-stone-200">
            <h2 className="font-semibold text-stone-700 mb-4">Spending by Category</h2>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie data={data} dataKey="total" nameKey="category" cx="50%" cy="50%" outerRadius={80} label>
                        {data.map((_, i) => (
                            <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}