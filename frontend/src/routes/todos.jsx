import React, { useEffect, useState } from "react";
import { Button, Select } from "antd";
import todoApiService from "../services/apis/todo.service";
import { useLoaderData, useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import TodoList from "../components/TodoList";
import AddTodoModal from "../components/AddTodoModal";

import { TodoStatusOptions } from "../config/constants";

function Todos() {
  const [todos, setTodos ] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [showAddTodoModal, setShowAddTodoModal] = React.useState(false);
  const [statusFilter, setStatusFilter] = React.useState((function(){
    const usp = new URLSearchParams(location.search);
    if(usp.get("status")) {
      return usp.get("status");
    }
    return "";
  })());
  const todoFilterOptions = React.useMemo(() => {
    return [
        {label: "All", value: ""},
        ...TodoStatusOptions
    ];
  });

  function handleStatusFilterChange(value) {
    setStatusFilter(value);
    const statusFilter = value ? `?status=${value}` : '';
    navigate(`/${statusFilter}`);
    fetchTodos(value);
  }

  async function fetchTodos(status) {
    const queryParams = {};
    if(status) {
        queryParams.status = status;
    }
    const response = await todoApiService.getAllTodos(queryParams);
    if (!response.ok) {
        throw new Response("Something went wrong", { status: response.status });
    }
    setTodos(response.todos);
  }

  useEffect(() => {
    fetchTodos(statusFilter);
  },[]);

  return (
    <>
      {showAddTodoModal && (
        <AddTodoModal onClose={() => setShowAddTodoModal(false)} />
      )}
      <div className="mb-8 mt-4 flex items-center justify-between">
        <Button
          title="Add new todo"
          type="primary"
          onClick={() => setShowAddTodoModal(true)}
        >
          Add todo
        </Button>
        <Select options={todoFilterOptions} value={statusFilter} className="w-36" onChange={handleStatusFilterChange}/>
      </div>
      <TodoList todos={todos} />
    </>
  );
}

export default Todos;
