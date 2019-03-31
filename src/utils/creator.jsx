const CreateRow = (val) => {
    return(
        {
            title: val,
            id: Math.random() * new Date().getTime(),
        }
    )
}

export default CreateRow;