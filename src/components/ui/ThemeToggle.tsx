'use client';

import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ThemeToggle({ className, size = 'md' }: ThemeToggleProps) {
  const { theme, setTheme, mounted } = useTheme();

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div 
        className={cn(
          'rounded-lg border border-border bg-bg-secondary',
          {
            'h-8 w-8': size === 'sm',
            'h-10 w-10': size === 'md',
            'h-12 w-12': size === 'lg',
          },
          className
        )}
      />
    );
  }

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const;

  const currentThemeIndex = themes.findIndex(t => t.value === theme);
  const nextTheme = themes[(currentThemeIndex + 1) % themes.length];

  const handleToggle = () => {
    setTheme(nextTheme.value);
  };

  const CurrentIcon = themes.find(t => t.value === theme)?.icon || Moon;

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  }[size];

  return (
    <motion.button
      onClick={handleToggle}
      className={cn(
        'relative flex items-center justify-center rounded-lg border border-border bg-bg-secondary text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
        {
          'h-8 w-8': size === 'sm',
          'h-10 w-10': size === 'md',
          'h-12 w-12': size === 'lg',
        },
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${nextTheme.label.toLowerCase()} theme`}
      title={`Current: ${themes.find(t => t.value === theme)?.label}. Click for ${nextTheme.label}.`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <CurrentIcon size={iconSize} />
      </motion.div>
    </motion.button>
  );
}

// Alternative dropdown version
export function ThemeToggleDropdown({ className }: { className?: string }) {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className={cn('h-10 w-32 rounded-lg border border-border bg-bg-secondary', className)} />
    );
  }

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const;

  return (
    <div className={cn('relative', className)}>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
        className="appearance-none rounded-lg border border-border bg-bg-secondary px-3 py-2 pr-8 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-primary"
      >
        {themes.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
}

// Theme indicator (shows current theme without toggle functionality)
export function ThemeIndicator({ className }: { className?: string }) {
  const { theme, resolvedTheme, mounted } = useTheme();

  if (!mounted) {
    return null;
  }

  const themes = {
    light: { icon: Sun, label: 'Light', color: 'text-yellow-500' },
    dark: { icon: Moon, label: 'Dark', color: 'text-blue-400' },
    system: { icon: Monitor, label: 'System', color: 'text-gray-400' },
  };

  const currentTheme = themes[theme];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className={cn('flex items-center gap-2 text-sm text-text-secondary', className)}>
      <CurrentIcon size={16} className={currentTheme.color} />
      <span>
        {currentTheme.label}
        {theme === 'system' && (
          <span className="ml-1 text-xs opacity-60">
            ({resolvedTheme})
          </span>
        )}
      </span>
    </div>
  );
}