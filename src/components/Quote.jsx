import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Quote = () => {
  const data = [
    "People’s lives don’t end when they die, it ends when they lose faith. - Itachi Uchiha (Naruto)",
    "If you don’t take risks, you can’t create a future! -Monkey D. Luffy (One Piece)",
    "Tread softly because you tread on my dreams",
    "If you don’t like your destiny, don’t accept it. -Naruto Uzumaki (Naruto)",
    "Two roads diverged in a wood, and I – I took the road less traveled by",
    "We don’t have to know what tomorrow holds! That’s why we can live for everything we’re worth today! -Natsu Dragneel (Fairy Tail)",
    "To be or not to be: that is the question",
    "Tis better to have loved and lost than never to have loved at all",
    "I wandered lonely as a cloud That floats on high o’er vales and hills, When all at once I saw a crowd, A host of golden daffodils;Beside the lake, beneath the trees,Fluttering and dancing in the breeze.",
    "I’ll leave tomorrow’s problems to tomorrow’s me. – Saitama (One-Punch Man)",
    "There’s no shame in falling down! True shame is to not stand up again!",
    "Even if I lose this feeling, I’m sure I’ll just fall in love with you all over again — Syaoran Li (Cardcaptor Sakura)",
    "If music be the food of love, play on",
    "Keep Taking Chances.!",
    "Believe What You Pray For",
    "Your Happiness Depends On Your Quality of Thoughts",
    "Whatever You Are Looking for Is Looking For You Too",
    "Don't Forget What You Are Made Up Of",
    "Your Heart Holds Deep Love And Wisdom",
    "What's Coming Is Better Than What's Going",
    "And when wind and winter harden All the loveless land,  It will whisper of the garden, You will understand",
    "I love you as certain dark things are to be loved / in secret, between the shadow and the soul.",
    "Simplicity is the easiest path to true beauty.",
    "If you can’t do something, then don’t. Focus on what you can. – Shiroe (Log Horizon)",
    "Reject common sense to make the impossible possible.",
    "Vision is not what your eyes see, but an image that your brain comprehends.",
    "The ticket to the future is always open.",
    "A place where someone still thinks about you is a place you can call home.",
    "Sometimes it’s necessary to do unnecessary things.",
    "I grow old... I grow old.../I shall wear the bottoms of my trousers rolled ",
    "I'm The Bone Of My Sword, Unknown To Death Nor Known To Life. -Unlimited Blade Works",
    "Yeah we jumping and popping, we jopping",
    "You’re a part of me, you and me, we are one. You are the reason for my life, if you’re not here, I’m not here. -You Calling My Name",
    "We are all like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let’s not disappear like a firework and continue to shine.. forever.",
    "Mistakes are not shackles that halt one from stepping forward. Rather, they are that which sustain and grow one’s heart.",
    "It’s not always possible to do what we want to do, but it’s important to believe in something before you actually do it.",
    "Find a victory in every defeat to remain hopeful, and find a defeat in every victory to remain humble.",
    "Rainbows are formed only when both rain and sunshine meet.",
  ];

  const [quote, setQuote] = useState("");

  const chooseQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const choosenQuote = data[randomIndex];
    setQuote(choosenQuote);
  };

  useEffect(() => {
    chooseQuote();
  }, []);

  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginTop: "25vh",
          padding: "10px",
          fontFamily: "Merriweather",
          color: "white",
        }}
      >
        {quote}
      </Typography>
    </Stack>
  );
};

export default Quote;
