interface IProps {
  params: {
    id: string[]
  }
}

const ProductPage = ({ params }: IProps) => {
  console.log('params', params) // params { id: [ '3', '5', '78' ] }
  return <div>ProductPage-ID {JSON.stringify(params)}-</div>
}

export default ProductPage
