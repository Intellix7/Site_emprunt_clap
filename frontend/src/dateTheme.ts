import { createTheme, type Theme } from '@mui/material/styles';
import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation';

const FOCUS_BORDER = 'color-mix(in oklab, var(--color-primary) 70%, transparent)';
const FOCUS_RING = '0 0 0 2px color-mix(in oklab, var(--color-primary) 25%, transparent)';
const OUTLINE = '.MuiPickersOutlinedInput-notchedOutline';

const pickerComponents: PickerComponents<Theme> = {
  MuiPickersOutlinedInput: {
    styleOverrides: {
      root: {
        height: 40, // h-10
        padding: '0 12px',
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-content)',
        fontSize: '0.875rem', // text-sm
        lineHeight: '1.25rem',
        transition: 'border-color 150ms, box-shadow 150ms',
        [`& ${OUTLINE}`]: {
          borderColor: 'var(--color-border)',
          borderWidth: 1,
        },
        [`&&:hover:not(.Mui-focused) ${OUTLINE}`]: {
          borderColor: 'var(--color-border)',
        },
        '&&.Mui-focused': {
          boxShadow: FOCUS_RING,
        },
        [`&&.Mui-focused:not(.Mui-error) ${OUTLINE}`]: {
          borderColor: FOCUS_BORDER,
          borderWidth: 1,
        },
        '&.Mui-disabled': {
          opacity: 0.5,
          [`& ${OUTLINE}`]: { borderColor: 'var(--color-border)' },
        },
        '& .MuiInputAdornment-root': {
          marginLeft: 4,
        },
        '& .MuiIconButton-root': {
          padding: 4,
          color: 'var(--color-content-faint)',
          '&:hover': {
            color: 'var(--color-content)',
            backgroundColor: 'var(--color-surface-hover)',
          },
        },
      },
    },
  },
  MuiPickersInputBase: {
    styleOverrides: {
      sectionsContainer: {
        padding: 0,
      },
    },
  },
};

export const dateTheme = createTheme({
  shape: {
    borderRadius: 8,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#ea3943',
      contrastText: '#ffffff',
    },
    background: {
      default: 'var(--color-bg)',
      // paper: 'var(--color-ink-50)',
    },
    text: {
      primary: '#f4f4f6',
      secondary: 'var(--color-content-muted)',
    },
    divider: 'var(--color-border-strong)',
  },
  typography: {
    fontFamily: 'var(--font-sans, "Inter", sans-serif)',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--color-bg)',
          accentColor: 'var(--color-primary)',
          color: 'var(--color-content)',
        },
      },
    },
    ...pickerComponents,
  },
});
