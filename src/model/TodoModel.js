import React from "react";

export default class TodoModel extends React.Component{
    constructor(id, isCompleted, text) {
        super(id, isCompleted, text);
        this.id = id;
        this.isCompleted = isCompleted;
        this.text = text;
    }
}