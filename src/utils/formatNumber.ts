export default (num = 0) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(num)
