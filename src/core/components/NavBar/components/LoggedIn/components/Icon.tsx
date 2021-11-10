interface Props {
    containerClassName: string,
    faIconName: string,
    current: string
}
export const Icon = (props: Props): JSX.Element => {
    const { containerClassName, faIconName, current } = props
    return (
        <div className={`icon-container ${current == containerClassName ? "icon-container-active" : ""}`}>
            <i className={`fas ${faIconName} ${current == containerClassName ? "fa-active" : ""}`} />
        </div>
    )
}