# Performance Testing

This directory contains performance audit results and documentation for the Adam Almahdi portfolio website.

## 📂 Directory Structure

```
tests/
└── performance/
    ├── reports/           # Raw Lighthouse audit reports
    │   ├── lighthouse-initial-2025-09-26.json
    │   └── lighthouse-optimized-2025-09-26.json
    ├── summaries/         # Analysis and summaries
    │   └── performance-audit-summary.md
    └── README.md         # This file
```

## 📊 Latest Performance Summary

**Overall Score: 95/100** ✅

- **Performance**: 95/100
- **Accessibility**: 100/100
- **Best Practices**: 100/100
- **SEO**: 100/100

## 🚀 Running Performance Tests

### Prerequisites
- Node.js 18+
- npm or yarn
- Google Chrome (for Lighthouse)

### Local Audit
```bash
# Build for production
npm run build

# Start production server
npm start

# Run Lighthouse audit
npx lighthouse http://localhost:3000 \
  --output=json \
  --output-path=tests/performance/reports/lighthouse-$(date +%Y-%m-%d).json \
  --view
```

### Automated Testing
```bash
# Run performance audit script
npm run audit:performance
```

## 📈 Performance Targets

Based on PROJECT_PLAN.md requirements:

| Metric | Target | Current | Status |
|--------|---------|---------|---------|
| Performance Score | ≥90 | 95 | ✅ |
| Accessibility | ≥95 | 100 | ✅ |
| Best Practices | ≥90 | 100 | ✅ |
| SEO | ≥95 | 100 | ✅ |
| First Contentful Paint | <1.5s | 0.8s | ✅ |
| Largest Contentful Paint | <2.5s | 2.9s | ⚠️ |
| Cumulative Layout Shift | <0.1 | 0.001 | ✅ |

## 🔍 Understanding Reports

### Lighthouse Reports
- **Format**: JSON
- **Location**: `tests/performance/reports/`
- **Naming**: `lighthouse-{type}-{date}.json`

### Summary Reports
- **Format**: Markdown
- **Location**: `tests/performance/summaries/`
- **Content**: Analysis, recommendations, and certification

## 🛠️ Performance Optimizations

### Implemented
1. **Code Splitting**: Separated framer-motion and lucide-react
2. **Caching**: Immutable CSS assets with 1-year TTL
3. **Tree Shaking**: Enhanced unused code elimination
4. **Bundle Optimization**: Strategic chunk separation

### Configuration Files
- `next.config.ts`: Webpack and build optimizations
- `package.json`: Build scripts and dependencies

## 📋 Maintenance

### Regular Audits
- **Frequency**: Monthly or after major changes
- **Tools**: Lighthouse CI/CD integration recommended
- **Thresholds**: Maintain ≥90 performance score

### Monitoring
- **Real User Metrics**: Consider Web Vitals monitoring
- **Bundle Analysis**: Regular bundle size reviews
- **Performance Budget**: Set and monitor budget limits

## 🚨 Troubleshooting

### Common Issues
1. **Audit Failures**: Ensure production build running
2. **Port Conflicts**: Check localhost:3000 availability
3. **Chrome Issues**: Update Chrome to latest version

### Getting Help
- Review `performance-audit-summary.md` for detailed analysis
- Check Next.js documentation for optimization guides
- Use Chrome DevTools for performance profiling

---

*Performance testing is crucial for maintaining excellent user experience and SEO rankings.*