function is_n_level_valid(n) {
    let level = parseInt(n, 10)


    return !isNaN(level) && level > 0 && level < 6
}

function is_topic_valid(topic) {
    return topic.length > 0
}

function print_user_settings() {
    let topic = document.getElementById("topic-input").value
    let n_lvl = document.getElementById("jlpt-level-input").value
    let feedback_p = document.getElementById("feedback")

    if (!is_n_level_valid(n_lvl)) {
        feedback_p.innerHTML = `${n_lvl} is not a valid N level.`
        feedback_p.style.color = "red"
        return
    }

        if (!is_topic_valid(topic)) {
        feedback_p.innerHTML = `'${topic}' is not a valid Topic.`
        feedback_p.style.color = "red"
        return
    }
    
    
    feedback_p.innerHTML = `Generating N${n_lvl} story about '${topic}'...`
    feedback_p.style.color = "black"
    request(topic, n_lvl)
} 

function request(topic, n_lvl) {
    const params = new URLSearchParams();
    params.append("topic", topic)

    const url = `http://localhost:8000/monogatari/${params}`

    fetch(url).then((response) => response.json()).then((data) => console.log(data))
}