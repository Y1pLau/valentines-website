# Gift Exchange Component Flow Chart

```mermaid
graph TD
    A[GiftExchange Component] --> B[Data Layer]
    B --> C[giftsData Object]
    C --> D[toGirlfriend Array]
    C --> E[fromGirlfriend Array]
    
    A --> F[UI Layer]
    F --> G[Gifts I Gave You Section]
    F --> H[Gifts You Gave Me Section]
    
    G --> I[Gift Cards Grid]
    H --> J[Gift Cards Grid]
    
    I --> K[Individual Gift Cards]
    J --> L[Individual Gift Cards]
    
    K --> M[Card Image]
    K --> N[Gift Name]
    K --> O[Description]
    K --> P[Date]
    
    L --> Q[Card Image]
    L --> R[Gift Name]
    L --> S[Description]
    L --> T[Date]

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style F fill:#bfb,stroke:#333,stroke-width:2px
```

## Flow Chart Explanation

### Component Hierarchy
1. **Root Level**
   - GiftExchange Component serves as the main container

2. **Data Management**
   - Data Layer manages the giftsData object
   - Separate arrays for gifts given and received

3. **UI Structure**
   - UI Layer splits into two main sections
   - Each section handles its respective gift display

4. **Card Components**
   - Individual cards display gift details
   - Consistent structure for both given and received gifts

### Data Flow
1. Data flows from giftsData object to respective arrays
2. Arrays are mapped to create grid sections
3. Each grid item renders a complete gift card
4. Cards display all gift information uniformly

### Visual Styling
- Pink: Main component
- Blue: Data management
- Green: UI components 