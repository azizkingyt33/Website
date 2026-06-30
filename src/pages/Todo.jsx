import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaEdit, FaCheck, FaPlus } from "react-icons/fa";
import ProjectPageHeader from "../components/ProjectPageHeader";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Todo() {
  const [tasks, setTasks] = useLocalStorage("todo_tasks", []);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: text.trim(), done: false }]);
    setText("");
  };

  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text: editText } : t)));
    setEditingId(null);
  };

  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <div className="min-h-screen pb-20">
      <ProjectPageHeader title="To-Do App" subtitle="Stay organized, stay productive" />

      <div className="max-w-xl mx-auto px-6">
        <form onSubmit={addTask} className="flex gap-3 mb-8">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 outline-none focus:border-accent transition-colors placeholder:text-white/30"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-transform flex items-center gap-2"
          >
            <FaPlus /> Add
          </button>
        </form>

        {tasks.length > 0 && (
          <p className="text-white/40 text-sm mb-4">{remaining} task(s) remaining</p>
        )}

        <div className="flex flex-col gap-3">
          <AnimatePresence>
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass glow-border rounded-2xl px-5 py-4 flex items-center gap-4"
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    task.done ? "bg-accent border-accent" : "border-white/30"
                  }`}
                >
                  {task.done && <FaCheck size={11} />}
                </button>

                {editingId === task.id ? (
                  <input
                    autoFocus
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && saveEdit(task.id)}
                    onBlur={() => saveEdit(task.id)}
                    className="flex-1 bg-transparent border-b border-accent outline-none"
                  />
                ) : (
                  <p
                    className={`flex-1 ${
                      task.done ? "line-through text-white/40" : ""
                    }`}
                  >
                    {task.text}
                  </p>
                )}

                <button
                  onClick={() => startEdit(task)}
                  className="text-white/40 hover:text-accent transition-colors"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-white/40 hover:text-accent transition-colors"
                >
                  <FaTrash />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          {tasks.length === 0 && (
            <p className="text-center text-white/30 py-10">No tasks yet — add one above!</p>
          )}
        </div>
      </div>
    </div>
  );
}
