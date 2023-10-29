
function ContentCard(props) {
  return (
    <>
    <div className={`flex flex-col px-2 bg-gray-100 border-4 border-solid border-green-600 rounded-sm drop-shadow-lg overflow-visible ${props.className}`}>
      {props.children}
    </div>
    </>
  );
}

export default ContentCard;
