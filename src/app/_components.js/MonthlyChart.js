
"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function MonthlyChart({ data }) {
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-200">
            <h2 className="font-semibold text-stone-700 mb-4">Monthly Overview</h2>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="income" fill="#4ade80" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expense" fill="#f87171" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}