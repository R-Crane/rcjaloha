/* ============================================================
   EDIT ME
   ============================================================ */

/* Leave blank to hide the --linkedin flag entirely */
const LINKEDIN_URL = ""; // e.g. "https://www.linkedin.com/in/yourhandle"

/* ============================================================ */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function typeLine(el, text, speed = 38) {
  if (prefersReducedMotion) {
    el.textContent = text;
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    let i = 0;
    const tick = () => {
      el.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        setTimeout(tick, speed);
      } else {
        resolve();
      }
    };
    tick();
  });
}

async function runHero() {
  const cmdEl = document.getElementById("whoami-cmd");
  const outEl = document.getElementById("whoami-out");
  await typeLine(cmdEl, "whoami");
  outEl.textContent = "Riley Crane-Jio";
}

function setupLinkedIn() {
  const el = document.getElementById("linkedin-flag");
  if (!el) return;
  if (LINKEDIN_URL) {
    el.href = LINKEDIN_URL;
  } else {
    el.remove();
  }
}

document.getElementById("year").textContent = new Date().getFullYear();
setupLinkedIn();
runHero();
