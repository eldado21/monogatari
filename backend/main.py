import ollama

models = [
    "deepseek-r1:8b",
    "gemma3:270m",
]

def monogatari(topic: str, jlpt_n_lvl: int) -> None:
    instructions: str = f"""
                        Generate a small tale about {topic} in japanese. 
                        This must be compiant with the JLPT N{jlpt_n_lvl} level. 
                        Do not use kanji above N{jlpt_n_lvl} level, use hiragana instead if needed. 
                        Your output must be in japanese only.
                        """

    stream: ollama.ChatResponse = ollama.chat(
        model=models[0],
        messages=[{"role": "user", "content": instructions}],
        stream=True,
    )


    for chunk in stream:
        print(chunk.message.content, end='', flush=True)


if __name__ == "__main__":
    monogatari("cars", 5)
