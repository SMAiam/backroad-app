function Title({ title, subTitles }) {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTitles}</span>
      </h2>
    </div>
  )
}
export default Title
