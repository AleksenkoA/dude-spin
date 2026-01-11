# Dude Spin Landing Page

A modern, responsive landing page for Dude Spin casino brand. Built with pure HTML, CSS, and vanilla JavaScript - no frameworks or CMS required.

## Project Structure

```
dude-spin-landing/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── script.js      # JavaScript functionality
│   └── images/            # Image assets (if needed)
└── README.md              # This file
```

## Features

- ✅ **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ✅ **Modern Design**: Clean, contemporary layout inspired by casino industry standards
- ✅ **Performance Optimized**: Built for GTmetrix Grade A performance
- ✅ **Accessible**: Semantic HTML and ARIA attributes
- ✅ **No Dependencies**: Pure vanilla JavaScript, no frameworks
- ✅ **SEO Friendly**: Proper meta tags and semantic structure

## Page Sections

1. **Header**: Sticky navigation with logo, menu anchors, and CTA button
2. **Hero**: Main headline, description, and visual block with CTAs
3. **Key Facts**: 8 feature cards with icons and values
4. **Specifications Table**: Detailed game mechanics and settings
5. **How to Play**: 6-step guide with visual cards
6. **Advantages**: 12 benefit points in grid layout
7. **Content Sections**: 4 informational text blocks
8. **FAQ**: 10-question accordion section
9. **Big CTA**: Final call-to-action block
10. **Footer**: Disclaimer, links, and copyright information

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The page is optimized for:
- Fast loading times
- Minimal CSS/JS footprint
- Efficient rendering
- GTmetrix Grade A target

## Customization

### Colors
Main colors are defined in CSS variables at the top of `style.css`:
```css
:root {
    --color-primary: #2563eb;
    --color-primary-dark: #1d4ed8;
    --color-secondary: #10b981;
    /* ... more variables */
}
```

### Content
- All text content is in `index.html`
- Images: Place optimized images in `assets/images/` directory
- Links: Update `#go` anchor links to actual destination URLs

### CTA Links
Replace `#go` href attributes with actual registration/play URLs.

## Deployment

1. Upload all files to your web hosting
2. Ensure proper file permissions
3. Test all functionality across devices
4. Verify GTmetrix performance score

## Image Optimization

If adding images:
- Use WebP or AVIF format for better compression
- Optimize images before uploading (use tools like TinyPNG, ImageOptim)
- Provide appropriate sizes for responsive images
- Consider lazy loading for below-fold images

## License

This project is created for Dude Spin brand. All rights reserved.

## Support

For questions or issues, please contact the development team.

---

**Note**: This is a static HTML page ready for deployment. No build process or compilation required. Simply upload to any web hosting service.