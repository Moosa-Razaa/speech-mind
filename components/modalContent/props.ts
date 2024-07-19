type Ship = {
    home_port: string,
    class: number,
    active: boolean,
    abs: number,
    id: string,
    image: string,
    imo: number,
    mmsi: number,
    name: string,
    type: string,
    url: string,
    year_built: number,
    status: string,
    roles: string[],
}

type ModalContentProps = {
    id: string,
    name: string,
    image: string,
    closeButtonOnPressHandler: () => void,
}

export  
{
    Ship,
    ModalContentProps
};