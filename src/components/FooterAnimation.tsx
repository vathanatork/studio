import React from 'react';

const FooterAnimation = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-24 pointer-events-none z-50 overflow-hidden">
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '0s' }}>
        <div className="w-24 h-auto animate-bob">
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
              <path d="M 80 20 C 95 15, 105 25, 90 35 L 85 35 L 80 20 Z" fill="hsl(var(--primary-foreground))" stroke="hsl(var(--primary))" strokeWidth="1" />
              <path d="M 20 20 C 40 5, 60 5, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--primary))" />
              <path d="M 15 35 L 20 20 L 5 25 L 15 35 Z" fill="hsl(var(--primary))" />
              <circle cx="12" cy="28" r="1.5" fill="hsl(var(--foreground))" />
              <path d="M 5 25 L 0 23" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
              <path d="M 5 25 L 0 27" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
              <g className="animate-walk-legs-1">
                <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
                <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
              </g>
              <g className="animate-walk-legs-2">
                 <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
                 <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '12.5s', transform: 'translateX(-100%) scaleX(-1)' }}>
        <div className="w-24 h-auto animate-bob" style={{ animationDelay: '0.2s' }}>
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
                <path d="M 20 20 C 40 10, 60 10, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--accent))" />
                <path d="M 20 20 L 15 15 L 25 15 L 20 20 Z" fill="hsl(var(--accent))" stroke="hsl(var(--accent-foreground))" strokeWidth="1" />
                <path d="M 80 20 L 85 15 L 75 15 L 80 20 Z" fill="hsl(var(--accent))" stroke="hsl(var(--accent-foreground))" strokeWidth="1" />
                <circle cx="75" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <circle cx="65" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <path d="M 90 25 C 95 20, 100 30, 90 35" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" strokeLinecap="round" />
                <g className="animate-walk-legs-1">
                    <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g className="animate-walk-legs-2">
                    <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '2.5s' }}>
        <div className="w-24 h-auto animate-bob" style={{ animationDelay: '0.1s' }}>
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
                <path d="M 20 20 C 40 5, 60 5, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--secondary))" />
                <path d="M 15 35 C 5 30, 5 20, 15 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <path d="M 85 35 C 95 30, 95 20, 85 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <circle cx="30" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <circle cx="70" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <g className="animate-walk-legs-1">
                    <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g className="animate-walk-legs-2">
                    <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '5s' }}>
        <div className="w-24 h-auto animate-bob" style={{ animationDelay: '0.1s' }}>
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
                <path d="M 20 20 C 40 5, 60 5, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--secondary))" />
                <path d="M 15 35 C 5 30, 5 20, 15 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <path d="M 85 35 C 95 30, 95 20, 85 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <circle cx="30" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <circle cx="70" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <g className="animate-walk-legs-1">
                    <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g className="animate-walk-legs-2">
                    <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '7.5s' }}>
        <div className="w-24 h-auto animate-bob" style={{ animationDelay: '0.1s' }}>
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
                <path d="M 20 20 C 40 5, 60 5, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--secondary))" />
                <path d="M 15 35 C 5 30, 5 20, 15 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <path d="M 85 35 C 95 30, 95 20, 85 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <circle cx="30" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <circle cx="70" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <g className="animate-walk-legs-1">
                    <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g className="animate-walk-legs-2">
                    <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '10s' }}>
        <div className="w-24 h-auto animate-bob" style={{ animationDelay: '0.1s' }}>
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
                <path d="M 20 20 C 40 5, 60 5, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--secondary))" />
                <path d="M 15 35 C 5 30, 5 20, 15 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <path d="M 85 35 C 95 30, 95 20, 85 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <circle cx="30" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <circle cx="70" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <g className="animate-walk-legs-1">
                    <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g className="animate-walk-legs-2">
                    <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '15s' }}>
        <div className="w-24 h-auto animate-bob" style={{ animationDelay: '0.1s' }}>
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
                <path d="M 20 20 C 40 5, 60 5, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--secondary))" />
                <path d="M 15 35 C 5 30, 5 20, 15 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <path d="M 85 35 C 95 30, 95 20, 85 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <circle cx="30" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <circle cx="70" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <g className="animate-walk-legs-1">
                    <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g className="animate-walk-legs-2">
                    <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '17.5s' }}>
        <div className="w-24 h-auto animate-bob" style={{ animationDelay: '0.1s' }}>
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
                <path d="M 20 20 C 40 5, 60 5, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--secondary))" />
                <path d="M 15 35 C 5 30, 5 20, 15 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <path d="M 85 35 C 95 30, 95 20, 85 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <circle cx="30" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <circle cx="70" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <g className="animate-walk-legs-1">
                    <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g className="animate-walk-legs-2">
                    <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '20s' }}>
        <div className="w-24 h-auto animate-bob" style={{ animationDelay: '0.1s' }}>
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
                <path d="M 20 20 C 40 5, 60 5, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--secondary))" />
                <path d="M 15 35 C 5 30, 5 20, 15 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <path d="M 85 35 C 95 30, 95 20, 85 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <circle cx="30" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <circle cx="70" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <g className="animate-walk-legs-1">
                    <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g className="animate-walk-legs-2">
                    <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '22.5s' }}>
        <div className="w-24 h-auto animate-bob" style={{ animationDelay: '0.1s' }}>
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
                <path d="M 20 20 C 40 5, 60 5, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--secondary))" />
                <path d="M 15 35 C 5 30, 5 20, 15 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <path d="M 85 35 C 95 30, 95 20, 85 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <circle cx="30" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <circle cx="70" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <g className="animate-walk-legs-1">
                    <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g className="animate-walk-legs-2">
                    <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '1.25s' }}>
        <div className="w-24 h-auto animate-bob" style={{ animationDelay: '0.1s' }}>
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
                <path d="M 20 20 C 40 5, 60 5, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--secondary))" />
                <path d="M 15 35 C 5 30, 5 20, 15 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <path d="M 85 35 C 95 30, 95 20, 85 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <circle cx="30" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <circle cx="70" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <g className="animate-walk-legs-1">
                    <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g className="animate-walk-legs-2">
                    <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '3.75s' }}>
        <div className="w-24 h-auto animate-bob" style={{ animationDelay: '0.1s' }}>
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
                <path d="M 20 20 C 40 5, 60 5, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--secondary))" />
                <path d="M 15 35 C 5 30, 5 20, 15 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <path d="M 85 35 C 95 30, 95 20, 85 15" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                <circle cx="30" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <circle cx="70" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <g className="animate-walk-legs-1">
                    <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g className="animate-walk-legs-2">
                    <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 animate-walk-across" style={{ animationDelay: '6.25s' }}>
        <div className="w-24 h-auto animate-bob" style={{ animationDelay: '0.1s' }}>
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0, 5)">
                <path d="M 20 20 C 40 10, 60 10, 80 20 L 85 35 L 15 35 L 20 20 Z" fill="hsl(var(--accent))" />
                <path d="M 20 20 L 15 15 L 25 15 L 20 20 Z" fill="hsl(var(--accent))" stroke="hsl(var(--accent-foreground))" strokeWidth="1" />
                <path d="M 80 20 L 85 15 L 75 15 L 80 20 Z" fill="hsl(var(--accent))" stroke="hsl(var(--accent-foreground))" strokeWidth="1" />
                <circle cx="75" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <circle cx="65" cy="25" r="1.5" fill="hsl(var(--foreground))" />
                <path d="M 90 25 C 95 20, 100 30, 90 35" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" strokeLinecap="round" />
                <g className="animate-walk-legs-1">
                    <line x1="30" y1="35" x2="25" y2="45" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="35" x2="60" y2="45" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
                </g>
                <g className="animate-walk-legs-2">
                    <line x1="35" y1="35" x2="40" y2="45" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
                    <line x1="70" y1="35" x2="75" y2="45" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
                </g>
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default FooterAnimation;
