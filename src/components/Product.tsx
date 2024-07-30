function Product(props: {
  info: { name: string; description: string; url: string; price: number }
}) {
  return (
    <>
      <div className="grid gap-4 p-4 pt-10 pb-10 text-slate-300 text-sm">
        <img src={"." + props.info.url} />
        <h1 className="font-title">{props.info.name}</h1>
        <p>{props.info.description}</p>
        <div className="grid grid-cols-2 justify-center item-center text-center divide-x-2 divide-white border-2 border-white rounded-none p-2">
          <p>${props.info.price}</p>
          <p className="self-center">other?</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </>
  )
}
export default Product
