function recommend() {

    let category = document.getElementById("category").value;
    let result = document.getElementById("result");

    let recommendations = {
        "Movies": [
            "🎬 Interstellar",
            "🎬 Inception",
            "🎬 Avengers: Endgame"
        ],

        "Books": [
            "📚 Atomic Habits",
            "📚 The Alchemist",
            "📚 Rich Dad Poor Dad"
        ],

        "Music": [
            "🎵 Believer - Imagine Dragons",
            "🎵 Perfect - Ed Sheeran",
            "🎵 Shape of You - Ed Sheeran"
        ]
    };

    let output = "<h3>Recommended for You:</h3><ul>";

    recommendations[category].forEach(function(item) {
        output += "<li>" + item + "</li>";
    });

    output += "</ul>";

    result.innerHTML = output;
}