// @ts-nocheck
import parser from "number-parsing"

export const formatMoney = (amount: number): string =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)

export const reverseFormatMoney = (amountText: string): number =>
    parser(amountText)