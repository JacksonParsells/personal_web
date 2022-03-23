/**
 * a single item in the sidebar
 * @author Jackson Parsells
 */

type SidebarItem = {
    // title of the item to be in the sidebar
    title: string,
    // path to the part of the page
    path: string,
    // icon associated with the item
    icon: React.ReactNode,
};

export default SidebarItem;