import icons from "../assets/icons.svg";

function Icons({className}) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${icons}#${className}`} />
        </svg>
    )
}

export default Icons;