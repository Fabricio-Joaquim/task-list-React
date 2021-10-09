export type data = {
    id:number;
    description:string;
    status:boolean
}

export type render = {
    item:data;
    onChange:(item:data) => void;
}