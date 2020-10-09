import Queue from "../queue";

function useQueue() {
    let list = new Queue<string>();
    list.enqueue("a", "b", "c", "d");

    console.log(list.peek());

    list.dequeue();

    console.log(list.size());
}

useQueue();
