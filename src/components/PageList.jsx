import classNames from "classnames"

let PageList = ({ onSetPage, pageCount, page }) => {
    return (
        <ul className="pageList">{pageCount.map((el, index) => <li key={`${el}_${index}`} className={classNames("pageList_item", { active: page === index + 1 })} 
        onClick={() => onSetPage(index + 1)}>{index + 1}</li>)}</ul>
    )
}

export default PageList