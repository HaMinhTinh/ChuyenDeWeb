import numeral from 'numeral'

export default function CurrencyFormatter({value}) {
    const formatValue = numeral(value).format('0,0');
    return(<span>{formatValue}</span>)
}
