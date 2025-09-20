import { isValidEmail } from './utils';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface ContactFormValidation {
  name: ValidationResult;
  email: ValidationResult;
  subject?: ValidationResult;
  message: ValidationResult;
  honeypot?: ValidationResult;
}

// Individual field validators
export const validateName = (name: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!name || name.trim().length === 0) {
    errors.push('Name is required');
  } else if (name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  } else if (name.trim().length > 50) {
    errors.push('Name must be less than 50 characters');
  } else if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
    errors.push('Name can only contain letters, spaces, hyphens, and apostrophes');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateEmail = (email: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!email || email.trim().length === 0) {
    errors.push('Email is required');
  } else if (!isValidEmail(email.trim())) {
    errors.push('Please enter a valid email address');
  } else if (email.trim().length > 100) {
    errors.push('Email must be less than 100 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateSubject = (subject: string): ValidationResult => {
  const errors: string[] = [];
  
  if (subject && subject.trim().length > 0) {
    if (subject.trim().length < 3) {
      errors.push('Subject must be at least 3 characters long');
    } else if (subject.trim().length > 100) {
      errors.push('Subject must be less than 100 characters');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateMessage = (message: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!message || message.trim().length === 0) {
    errors.push('Message is required');
  } else if (message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  } else if (message.trim().length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateHoneypot = (honeypot: string): ValidationResult => {
  const errors: string[] = [];
  
  // Honeypot should be empty (filled by bots)
  if (honeypot && honeypot.trim().length > 0) {
    errors.push('Spam detected');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Complete form validation
export const validateContactForm = (formData: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  honeypot?: string;
}): ContactFormValidation => {
  return {
    name: validateName(formData.name),
    email: validateEmail(formData.email),
    subject: formData.subject ? validateSubject(formData.subject) : undefined,
    message: validateMessage(formData.message),
    honeypot: formData.honeypot ? validateHoneypot(formData.honeypot) : undefined,
  };
};

// Check if entire form is valid
export const isFormValid = (validation: ContactFormValidation): boolean => {
  const requiredFields = [validation.name, validation.email, validation.message];
  const optionalFields = [validation.subject, validation.honeypot].filter(Boolean) as ValidationResult[];
  
  const allFields = [...requiredFields, ...optionalFields];
  
  return allFields.every(field => field.isValid);
};

// Get all form errors
export const getFormErrors = (validation: ContactFormValidation): string[] => {
  const allErrors: string[] = [];
  
  if (!validation.name.isValid) {
    allErrors.push(...validation.name.errors);
  }
  
  if (!validation.email.isValid) {
    allErrors.push(...validation.email.errors);
  }
  
  if (validation.subject && !validation.subject.isValid) {
    allErrors.push(...validation.subject.errors);
  }
  
  if (!validation.message.isValid) {
    allErrors.push(...validation.message.errors);
  }
  
  if (validation.honeypot && !validation.honeypot.isValid) {
    allErrors.push(...validation.honeypot.errors);
  }
  
  return allErrors;
};

// Real-time validation helpers
export const validateFieldOnChange = (
  fieldName: string,
  value: string
): ValidationResult => {
  switch (fieldName) {
    case 'name':
      return validateName(value);
    case 'email':
      return validateEmail(value);
    case 'subject':
      return validateSubject(value);
    case 'message':
      return validateMessage(value);
    case 'honeypot':
      return validateHoneypot(value);
    default:
      return { isValid: true, errors: [] };
  }
};

// Sanitize input data
export const sanitizeFormData = (formData: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  honeypot?: string;
}) => {
  return {
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    subject: formData.subject?.trim(),
    message: formData.message.trim(),
    honeypot: formData.honeypot?.trim(),
  };
};

// Rate limiting validation
export const validateRateLimit = (
  lastSubmissionTime: number,
  minInterval: number = 60000 // 1 minute default
): ValidationResult => {
  const errors: string[] = [];
  const now = Date.now();
  const timeSinceLastSubmission = now - lastSubmissionTime;
  
  if (timeSinceLastSubmission < minInterval) {
    const remainingTime = Math.ceil((minInterval - timeSinceLastSubmission) / 1000);
    errors.push(`Please wait ${remainingTime} seconds before submitting again`);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// URL validation for social links
export const validateUrl = (url: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!url || url.trim().length === 0) {
    errors.push('URL is required');
  } else {
    try {
      new URL(url);
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        errors.push('URL must start with http:// or https://');
      }
    } catch {
      errors.push('Please enter a valid URL');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Phone number validation (optional)
export const validatePhone = (phone: string): ValidationResult => {
  const errors: string[] = [];
  
  if (phone && phone.trim().length > 0) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.push('Please enter a valid phone number');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};