/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { TodoStatusEnum } from "../enum/todo-status.enum";
import { TodoDTO } from "./todo.dto";

export class UpdateTodo extends PartialType(TodoDTO) {
    public status: TodoStatusEnum;
}