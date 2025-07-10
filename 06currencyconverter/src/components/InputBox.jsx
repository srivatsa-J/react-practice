// ./components/InputBox.jsx
export function InputBox({
  label,
  amount,
  currencyOptions = [],
  onCurrencyChange,
  onAmountChange,
  selectedCurrency,
  amountDisabled = false,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center gap-4">
      <div className="w-1/2">
        <label className="block text-sm text-gray-600 mb-1">{label}</label>
        <input
          type="number"
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2">
        <label className="block text-sm text-gray-600 mb-1">Currency Type</label>
        <select
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
