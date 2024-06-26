export default function CardProduct(props) {
  const { children } = props;
  return (
    <>
      <div className="w-[180px] h-auto flex flex-col">{children}</div>
    </>
  );
}

function Header(props) {
  const { src } = props;
  return (
    <div className="w-full h-[200px]">
      <img src={src} alt="" className="w-full h-full object-contain" />
    </div>
  );
}

function Body(props) {
  const { title, price } = props;
  return (
    <div className="flex flex-col justify-between">
      <h1 className="text-[18px] line-clamp-2">{title}</h1>
      <p className=" text-gray-400 text-[14px]">Lowest ask</p>
      <h2 className="font-semibold text-[24px]">{price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h2>
    </div>
  );
}

CardProduct.body = Body;
CardProduct.header = Header;
