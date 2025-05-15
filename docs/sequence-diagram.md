# Gift Exchange Component Sequence Diagram

```mermaid
sequenceDiagram
    participant U as User
    participant GE as GiftExchange Component
    participant GD as giftsData
    participant MUI as Material-UI Components
    participant R as React DOM

    U->>GE: Visits Gift Exchange Page
    activate GE
    
    GE->>GD: Request Gift Data
    GD-->>GE: Return Gift Arrays (toGirlfriend & fromGirlfriend)
    
    GE->>MUI: Create Box Container
    MUI-->>GE: Return Box Component
    
    GE->>MUI: Create Typography (Main Title)
    MUI-->>GE: Return Typography Component
    
    par Gifts I Gave You Section
        GE->>MUI: Create Typography (Section Title)
        MUI-->>GE: Return Typography Component
        GE->>GD: Map toGirlfriend Array
        loop Each Gift
            GE->>MUI: Create Grid Item
            GE->>MUI: Create Card
            GE->>MUI: Create CardMedia (Image)
            GE->>MUI: Create CardContent
            MUI-->>GE: Return Rendered Gift Card
        end
    and Gifts You Gave Me Section
        GE->>MUI: Create Typography (Section Title)
        MUI-->>GE: Return Typography Component
        GE->>GD: Map fromGirlfriend Array
        loop Each Gift
            GE->>MUI: Create Grid Item
            GE->>MUI: Create Card
            GE->>MUI: Create CardMedia (Image)
            GE->>MUI: Create CardContent
            MUI-->>GE: Return Rendered Gift Card
        end
    end
    
    GE->>R: Render Complete Component
    R-->>U: Display Gift Exchange Page
    deactivate GE
    
    U->>GE: View Gift Cards
    GE->>MUI: Handle Card Display
    MUI-->>U: Show Gift Details
```

## Sequence Diagram Explanation

### Initial Load Process
1. **User Interaction**
   - User navigates to Gift Exchange page
   - Component activation begins

2. **Data Retrieval**
   - Component requests data from giftsData
   - Static data is returned immediately

3. **Component Initialization**
   - Creation of main container
   - Setting up typography elements

### Parallel Rendering Process
1. **Gifts I Gave You Section**
   - Section title creation
   - Mapping through toGirlfriend array
   - Individual card creation for each gift

2. **Gifts You Gave Me Section**
   - Section title creation
   - Mapping through fromGirlfriend array
   - Individual card creation for each gift

### Card Creation Process
1. **For Each Gift Card**
   - Grid item container creation
   - Card component initialization
   - Image loading through CardMedia
   - Content rendering with gift details

### User Interaction Flow
1. **Component Display**
   - Final render to React DOM
   - Page display to user

2. **View Interaction**
   - User views gift cards
   - Material-UI handles display states 