import React from 'react'
import TaskTrackingCard from "@/components/cards/TaskTrackingCard";
import { Text, View, StyleSheet } from "react-native";
import { TaskTrackingMock } from "@/mock/task_tracking_mock";
import TaskTracking from "@/entities/task_tracking";
import { useEffect, useState } from "react";
import TitlePage from "@/components/titles/TitlePage";

function TasksTrackingsBlock() {
    const [todo, setTodo] = useState<TaskTracking[]>([]);
    const [inProgress, setInProgress] = useState<TaskTracking[]>([]);
    const [done, setDone] = useState<TaskTracking[]>([]);

    const fetchTodoTasks = async () => {
        setTodo(TaskTrackingMock.filter(task => task.getState() === 1));
    }

    const fetchInProgressTasks = async () => {
        setInProgress(TaskTrackingMock.filter(task => task.getState() === 2));
    }

    const fetchDoneTasks = async () => {
        setDone(TaskTrackingMock.filter(task => task.getState() === 3));
    }

    useEffect(() => {
        fetchTodoTasks();
        fetchInProgressTasks();
        fetchDoneTasks();
    }, []);

  return (
    <>
        <TitlePage title="Suivis de tâches"/>
        <View style={styles.task_tracking}>
            {todo.length > 0 && (
                <View style={styles.container_task}>
                    <View style={[styles.header_task, styles.bg_todo]}>
                        <Text style={styles.white}>À faire</Text>
                        <Text style={styles.white}>{todo.length}</Text>
                    </View>
                    {todo.map(task => (
                        <TaskTrackingCard key={task.getId()} id={task.getId()}/>
                    ))}
                </View>
            )}
            <View style={styles.container_task}>
                <View style={[styles.header_task, styles.bg_in_progress]}>
                    <Text style={styles.white}>En cours</Text>
                    <Text style={styles.white}>{inProgress.length}</Text>
                </View>
                {inProgress.map(task => (
                    <TaskTrackingCard key={task.getId()} id={task.getId()}/>
                ))}
            </View>
            <View style={styles.container_task}>
                <View style={[styles.header_task, styles.bg_done]}>
                    <Text style={styles.white}>Terminé</Text>
                    <Text style={styles.white}>{done.length}</Text>
                </View>
                {done.map(task => (
                    <TaskTrackingCard key={task.getId()} id={task.getId()}/>
                ))}
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    header_task: {
        flexDirection: "row",
        gap: 15,
        marginBottom: 10,
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 50,
    },
    container_task: {
        alignItems: 'flex-start',
    },
    task_tracking: {
        marginHorizontal: 12,
        marginVertical: 8,
        flexDirection: "column",
        gap: 10,
    },
    white: {
        color: "white",
    },
    bg_todo:{
        backgroundColor: "rgba(90, 90, 90, 0.8)",
    },
    bg_in_progress:{
        backgroundColor: "rgba(41, 90, 149, 0.8)",
    },
    bg_done:{
        backgroundColor: "rgba(45, 118, 80, 0.8)",
    },
});

export default TasksTrackingsBlock