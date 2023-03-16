import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
            Ich freue mich sehr über Ihren Besuch und begrüße Sie hier sehr herzlich!
            </p><br></br>
            <h3>Über mich!</h3>
            <p>
            Seit dem 12.04.1961 versuche ich meinen eigenen Weg in dieser Welt zu finden.
            </p>            
            <p>
            Nach vielen Einbahnstraßen und auch Irrwegen habe ich nun mein "Herzensziel" gefunden.
            </p><br></br>
            <h3>Herzensziel?</h3>
            <p>
            Am 22.06.2022 habe ich, nach Absolvierung eines Orientierungskurses, dieses Ziel auf solide Füße gestellt und eine Weiterbildung beim <a href="https://digitalcareerinstitute.org/de/courses/aws-re-start-program/" target="_blank" rel="noreferrer">DCI</a> zum <a href="https://digitalcareerinstitute.org/de/courses/web-development/" target="_blank" rel="noreferrer">MERN Web Developer</a> begonnen.
            </p>
            <p>
            Hier lerne ich meine Kreativität zielführend zu strukturieren und somit Ihnen vorzustellen.
            </p>
            <p>Ich bin keinesfalls perfekt, aber ich lerne das, was diesen Beruf wirklich ausmacht, täglich mehr zu schätzen, und bin meinen Ausbildern <a href="https://www.arii.me" target="_blank" rel="noreferrer">Ari Razab</a> & <a href="https://www.linkedin.com/in/sidar-halman-9a0835165/" target="_blank" rel="noreferrer">Sidar Halman</a> unendlich dankbar, für ihre Bemühungen, ihre Zeit und ihre Geduld.
            </p>
            <p>
            Die Klasse, die sich aus verschiedenen Nationalitäten zusammensetzt, ist für mich ein täglicher Quell an neuen Eindrücken, denn die Arbeit in wechselnden Teams zeigt mir, welchen unschätzbaren Wert "Brainstorming" haben kann.
            </p><br></br>
            <h2>Ich suche keinen Job?</h2>
            <p>
            Vieleicht wundern Sie sich gerade, warum ich dies so schreibe, wie es hier steht.</p>
            <p>
            Ich versuche Ihnen mit meinen eigenen Worten zu zeigen, das ich keinen Job suche, sondern einen Beruf ausüben will.
            Ich will Ihre Gedanken, Ihre Wünsche, einfach gesagt, das was Sie und / oder Ihr Unternehmen ausmacht, nach besten Kräften unterstützen und der Welt vorstellen.
            </p>
            <p>
            Daher freue ich mich auf eine Zusammenarbeit mit Ihnen!
            </p>
          </article>
        </>
      </div>
    </>
  );
};

export default About;